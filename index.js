window.addEventListener('click', (event) => clickToBody(event), false)

const container = document.getElementById('container');

/**
 * Accordion contents
 */

const dataSet = [
    {
        countryName: 'India',
        details: `India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area; the most populous country as of June 2023; and from the time of its independence in 1947, the world's most populous democracy.`
    }, 
    {
        countryName: 'The Netherlands',
        details: `The Netherlands, a country in northwestern Europe, is known for a flat landscape of canals, tulip fields, windmills and cycling routes. Amsterdam, the capital, is home to the Rijksmuseum, Van Gogh Museum and the house where Jewish diarist Anne Frank hid during WWII.`
    },
    {
        countryName: 'Belgium',
        details: `Belgium, a country in Western Europe, is known for medieval towns, Renaissance architecture and as headquarters of the European Union and NATO. The country has distinctive regions including Dutch-speaking Flanders to the north, French-speaking Wallonia to the south and a German-speaking community to the east`
    },
    {
        countryName: 'Switzerland',
        details: `Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge.`
    }
];

const viewContent = [];

/**
 * Create an accordion dynamically
 */

function createAccordion() {
    const uiElem = document.createElement('ui');
    dataSet.forEach((elem, index) => {
        const liElem = document.createElement('li');
        liElem.innerText = elem.countryName;
        liElem.addEventListener('click', (e) => clickForDetails(e, index));

        const divElem = document.createElement('div');
        divElem.className = 'details-view';
        divElem.id = `details_${index}`;

        divElem.innerHTML = `<p> ${elem.details} </p>`;
        liElem.appendChild(divElem);
        uiElem.appendChild(liElem);
    });

    container.appendChild(uiElem);
}

/**
 * Handle event to see the details
 */

function clickForDetails(e, idx) {
    e.stopPropagation();
    const details = document.getElementById(`details_${idx}`);
    if(viewContent.length) {
        const findIdx = viewContent.indexOf(idx);
        const popedVal = viewContent[0];
        document.getElementById(`details_${popedVal}`).style['display'] = 'none';
        if (findIdx === -1) {
            viewContent[0] = idx;
            details.style['display'] = 'block'
        } else {
            viewContent.pop();
        }
    } else {
        viewContent.push(idx);
        details.style['display'] = 'block'
    }
}

/**
 * close any opened details if user click outside
 */
function clickToBody(e) {
    if(!document.querySelector('li').contains(e.target)) {
        if (viewContent.length) {
            const value = viewContent.pop();
            document.getElementById(`details_${value}`).style['display'] = 'none'
        }
    }
}

createAccordion();
