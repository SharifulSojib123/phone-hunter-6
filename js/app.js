const loadSearchPhone = () => {

    const searchField = document.getElementById('search-field');
    const searchPhone = searchField.value;



    searchField.value = '';

    url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));

}

const displaySearchResult = phones => {
    // console.log(phones);

    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    for (const phone of phones) {
        // console.log(phone);



        const div = document.createElement('div');

        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadSearchPhoneById('${phone.slug}')" class="card">
                <img  src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
                <div class="card-body">
                    <h3 class="card-title">${phone.phone_name}</h3>
                    
                    <h4 class="card-text">${phone.slug}</h4>
                    <p class="card-text">${phone.brand}</p>

                   
                </div>
            </div>
        
        
        `;
        searchResult.appendChild(div);




    }
}

const loadSearchPhoneById = phoneId => {

    url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneById(data.data));


}

const displayPhoneById = phone => {

    console.log(phone);


    const phoneDetails = document.getElementById('phone-details');

    const div = document.createElement('div');

    div.classList.add('col');
    div.innerHTML = `

    <h2>Single phone Details:</h2>
        <div  class="card">
        
                <img  src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
                <div class="card-body">
                    <h3 class="card-title">${phone.name}</h3>
                    
                    <h4 class="card-text">${phone.slug}</h4>
                    <p class="card-text">${phone.brand}</p>
                    <p class="card-text">${phone.releaseDate}</p>

                   
                </div>
            </div>
        
        
        `;
    phoneDetails.appendChild(div);

}