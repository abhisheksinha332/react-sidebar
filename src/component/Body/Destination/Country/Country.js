import React from 'react'
import * as s from './Country.styles'


const Country = (props) => {
    const country = props.match.params.country
    console.log(country);
    const countries = {
        canada: {
            img: '/images/image.jpg',
            description: 'hello canada'
        },
        japan: {
            img: '/images/image.jpg',
            description: 'hello japan'
        },
        bhutan: {
            img: '/images/image.jpg',
            description: 'hello bhutan'
        },
        maxico: {
            img: '/images/image.jpg',
            description: 'hello maxico'
        },
        germany: {
            img: '/images/image.jpg',
            description: 'hello germany'
        },
        india: {
            img: '/images/image.jpg',
            description: 'hello india'
        }
    }


    return (
       <s.CountryContainer>
           <s.CountryImage img={countries[country]['img']} />
           
           <s.CountryDescription>{countries[country]['description']}</s.CountryDescription>
       </s.CountryContainer>
    )
}

export default Country
