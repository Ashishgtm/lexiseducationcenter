import React from 'react'
import './Universities.css'
import Flag from 'react-world-flags';

const UniversitiesA = () => {

    const universities = [
        {
          name: "Study in South Korea",
          country: "South Korea",
          flagCode: 'KR', // ISO country code for South Korea
          img: "https://i.pinimg.com/736x/9c/51/eb/9c51eb944358854469a823ce93eabdc0.jpg", // Replace with an appropriate URL
        },
        {
          name: "Study in USA",
          country: "United States Of America",
          flagCode: 'US', // ISO country code for the USA
          img: "https://i.pinimg.com/736x/1a/b0/8b/1ab08b24e7d731a66322e648cba6f0d7.jpg", // Replace with an appropriate URL
        },
        {
          name: "Study in Japan",
          country: "Japan",
          flagCode: 'JP', // ISO country code for Japan
          img: "https://i.pinimg.com/736x/22/5c/fe/225cfea0030b121651fb8a788467273e.jpg", // Replace with an appropriate URL
        },
        {
            name: "Study in Australia",
            country: "Australia",
            flagCode: 'AUS', // ISO country code for the USA
            img: "https://i.pinimg.com/736x/a9/2f/bc/a92fbc909931ac8485d4c23a8efac6a7.jpg", // Replace with an appropriate URL
          },
          {
            name: "Study in UK",
            country: "United Kingdom",
            flagCode: 'GB', // ISO country code for the USA
            img: "https://i.pinimg.com/736x/c9/1e/83/c91e83e79cf4e7c4e4331810c2fe7e5e.jpg", // Replace with an appropriate URL
          },
          {
            name: "Study in Canada",
            country: "Canada",
            flagCode: 'CA', // ISO country code for the USA
            img: "https://i.pinimg.com/736x/aa/14/43/aa1443353e76e2e687e30c9851e76fbf.jpg", // Replace with an appropriate URL
          },
          {
            name: "Study in Germany",
            country: "Germany",
            flagCode: 'DE', // ISO country code for the USA
            img: "https://i.pinimg.com/736x/1c/41/91/1c4191c5287d6cdc72a30dcefc095518.jpg", // Replace with an appropriate URL
          },
          {
            name: "Study in Dubai",
            country: "Emirate of Dubai",
            flagCode: 'AE', // ISO country code for the USA
            img: "https://i.pinimg.com/736x/43/b5/15/43b5155bf16f95a48700056bddfb48a4.jpg", // Replace with an appropriate URL
          },
          {
            name: "Study in France",
            country: "France",
            flagCode: 'FR', // ISO country code for the USA
            img: "https://i.pinimg.com/736x/44/03/f0/4403f0a973a39baf1c5fca1165f85b68.jpg", // Replace with an appropriate URL
          },
      ];



  return (
    <div>
 <div className='university-heading'>Universities worldwide</div>
        <div className="university-headtext">"Choose a university that will push you beyond your limits and help you discover your true potential."</div>

        <div className="uni-container">
      {universities.map((university, index) => (
        <div className="card" key={index}>
          <img src={university.img} alt={university.name} className="card-img" />
          <div className="card-info">
            <h3 className="card-title">{university.name}</h3>
            <p className="card-country">
                            <Flag code={university.flagCode} style={{ width: '40px', height: '16px', marginRight: '2px'}} />
                
              {university.flag} {university.country}
            </p>
          </div>
        </div>
      ))}
    </div>



    </div>
  )
}

export default UniversitiesA