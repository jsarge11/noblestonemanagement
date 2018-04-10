import React, { Component } from 'react'
import '../App.css'
import Box from './Box'
import Footer from './Footer'

class Body extends Component {
    state = {
        active: -1,
        informational: [
                "Congratulations! You picked a beautiful piece of stone that no doubt has added much value to your home. Like anything of value, your stone can either appreciate or depreciate depending on how you care for it. When sealed properly and cleaned with the proper stone conditioners, your stone will keep its vibrancy and luster longer. Believe it or not, not all sealers are made equal! In fact, each stone requires a certain sealer designed to react with its particular mineral make up and density. Noble Stone Management relies on AquaMix brand sealers to fulfill these needs. To redeem your free consultation please present this invitation to set up a specialized sealing and maintenance program that will prolong the beauty of your purchase.", 

                "This product requires a specific sealer to be applied. Failure to apply the proper sealer can result in the premature deterioration of your stones beautiful color, and or finish. Your sealer should be reapplied every 2 years, to remain effective. This product also requires regular applications of the proper cleaner(s). The wrong cleaners can not only deteriorate your sealer but can deteriorate your stones finish. Call us to get your free consultation to learn more about your stone and sealer options.",

                `<strong>We fix:</strong> <br/> 
                                Dirty grout and flooring dull finishes holes <br/>
                                Chips <br/>
                                Cracks <br/>
                                Uneven Tile Damage <br/>
                                Stains (as a result of household cleaners)`,

                `We offer monthly,
                quarterly and bi-annual
                maintenance programs
                geared for your location
                and budget. Maintenance
                programs (including
                frequency and scope of
                work) are customized to
                your surfaces and budget.`
        ]
    }

    handleInformational = (selected) => {
        console.log(document.getElementById("informational").classList.contains("open"))

        if (document.getElementById("informational").classList.contains("open"))  {  
            if (selected === this.state.active) {
                document.getElementById("informational").classList.toggle("open");
            }
       }
       else {
        document.getElementById("informational").classList.toggle("open");
       }
        if (selected === 1) {
            document.getElementById("informational").innerHTML = this.state.informational[0];        
        }
        else if (selected === 2) {
            document.getElementById("informational").innerHTML = this.state.informational[1];
        }
        else if (selected === 3) {
            document.getElementById("informational").innerHTML = this.state.informational[2];
        }
        else if (selected === 4) {
            document.getElementById("informational").innerHTML = this.state.informational[3];
        }

        this.setState({ active: selected })
       
    }
   
    render() {
        return (
            <div>
                <div id="section1">
                    <Box onClick={() => this.handleInformational(1)} number="1" />
                    <Box onClick={() => this.handleInformational(2)} number="2" />
                    <Box onClick={() => this.handleInformational(3)} number="3" />
                    <Box onClick={() => this.handleInformational(4)} number="4" />
                    
                </div>
                <div id="wrapper" className="infoWrapper">
                    <div id="informational"></div>
                </div>
                <Footer />
            </div>
        );
    }

}

export default Body