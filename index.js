// API request options
const options = {
    method: 'GET',
    headers: { 
        accept: 'application/json', 
        'x-cg-demo-api-key': window.CONFIG?.coinGeckoApiKey || '' 
    },
};

// State variables
let coins = []; 
let currentPage = 1; 

const fetchCoins = async (page = 1) => {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=${page}`, options);
        coins = await response.json();
    } catch (err) {
        console.error(err);
    }
    return coins;
};

const getFavorites = () => JSON.parse(localStorage.getItem('favorites')) || [];

const saveFavorites = (favorites) => localStorage.setItem('favorites',JSON.stringify(favorites));

// Toggle favorite status
const toggleFavorite = (coinId) =>{
    let favorites =getFavorites();
    if(favorites.includes(coinId)){
        favorites = favorites.filter(id => id !== coinId);
    }else{
        favorites.push(coinId);
    }
    saveFavorites(favorites);
    return favorites;
}

const handleFavoriteClick  = (coinId,iconElement) =>{
    const favorites = toggleFavorite(coinId);
    iconElement.classList.toggle('favorite', favorites.includes(coinId));
}



const renderCoinRow = (coin, index, start, favorites) => {
    const isFavorite = favorites.includes(coin.id);
    const row = document.createElement('tr');
    row.classList.add('coin-row');
    row.setAttribute('data-id', coin.id);
    row.innerHTML = `
        <td>${start + index}</td>
        <td><img src="${coin.image}" alt="${coin.name}" width="24" height="24" /></td>
        <td>${coin.name}</td>
        <td>$${coin.current_price.toLocaleString()}</td>
        <td>$${coin.total_volume.toLocaleString()}</td>
        <td>$${coin.market_cap.toLocaleString()}</td>
        <td>
            <i class="fas fa-star favorite-icon ${isFavorite ? 'favorite' : ''}" data-id="${coin.id}"></i>
        </td>
    `;
    return row;
};

const renderCoins = (coinsToDisplay, page, itemsPerPage) => {
    const start = (page - 1) * itemsPerPage + 1;
    const favorites = getFavorites();
    const tableBody = document.querySelector('#crypto-table tbody');

    console.log(tableBody);
    
    if (!tableBody) {
        console.error("Table body element not found!");
        return;
    }

    tableBody.innerHTML = ''; // Clear existing rows before rendering new data

    coinsToDisplay.forEach((coin, index) => {
        const row = renderCoinRow(coin, index, start, favorites);
        tableBody.appendChild(row);
    });
};

const initializePage = async () => {
    coins = await fetchCoins(currentPage);
    
    if (coins.length === 0) {
        console.error("No coins data fetched!");
        return;
    }

    renderCoins(coins, currentPage, 25);
};


document.addEventListener('click',(event)=>{
    if(event.target.classList.contains('favorite-icon')){
        event.stopPropagation();
        const coinId = event.target.dataset.id;
        handleFavoriteClick(coinId,event.target);
    }

    const row = event.target.closest('.coin-row');
    if(row && !event.target.classList.contains('favorite-icon')){
        const coinId = row.getAttribute('data-id');
        window.location.href = `coin.html?id=${coinId}`;
    }

})



// Debounce Function 
let debounceTimeout;
const debounce = (func,delay)=>{
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(func,delay);
}


// Fetch search result from API
const fetchSearchResult = async (query)=>{
    try{
        const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`, options);
        const data = await response.json();
        return data.coins;
    }catch(err){
        console.error("Error fetching search results: ", err);
        return [];
    }
}

// Show search results in the dialog 

const showSearchResults = (results) =>{
    const searchDialog = document.querySelector('#search-dialog');
    const resultList = document.querySelector('#search-results');

    resultList.innerHTML = '';

    if(results.length !== 0){
        results.slice(0,10).forEach(result=>{
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${result.thumb}" alt="${result.name}" width="24" height="24" />
                <span>${result.name}</span>
            `;
            listItem.dataset.id = result.id;
            resultList.append(listItem);
        })
    }else{
        resultList.innerHTML = '<li>No coin data!</li>';
    }


    resultList.querySelectorAll('li').forEach(item=>{
        item.addEventListener('click',(event)=>{
            const coinId = event.currentTarget.dataset.id;
            window.location.href = `coin.html?id=${coinId}`;
        });
    });

        searchDialog.style.display = 'block';
};



// Close search dialog

const closeSearchDialog = ()=>{
    document.querySelector('#search-dialog').style.display = 'none';
}

// Handle Searxh input with debounce

const handleSearchInput = ()=>{
    debounce(async ()=>{
        const searchTerm = document.querySelector('#search-box').value.trim();
        if(searchTerm){
            const result = await fetchSearchResult(searchTerm);
            showSearchResults(result);
        }else{
            closeSearchDialog();
        }
    },300);
}





// Attach event listeners
document.addEventListener('DOMContentLoaded', initializePage);
document.querySelector('#search-box').addEventListener('input',handleSearchInput);
document.querySelector('#search-icon').addEventListener('click',handleSearchInput);
document.querySelector('#close-dialog').addEventListener('click',closeSearchDialog);



