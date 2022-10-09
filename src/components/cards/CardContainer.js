import React, { Component } from "react";
import NewsCard from "./NewsCard";

class CardContainer extends Component {
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <NewsCard
            title="Russian divers to check damage to blast-hit Crimea bridge - Reuters.com"
            description="Russian divers were to examine on Sunday the damage from a powerful blast on a road-and-rail bridge to Crimea that is an imposing symbol of Moscow's annexation of the peninsula and a key supply route to its forces battling in southern Ukraine."
            imgUrl="https://www.reuters.com/resizer/tjXCsWWoIjw21ZPIBICa_0V9qkg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MLCSNOW3SZPS3HIJSCMOH245WE.jpg"
          />
        </div>

        <div className="col-md-4">
          <NewsCard
            title="North Korea fires two ballistic missiles in seventh of recent launches - Reuters.com"
            description="North Korea fired two ballistic missiles early on Sunday, authorities in neighbouring countries said, the seventh such launch by Pyongyang in recent days that added to widespread alarm in Washington and its allies in Tokyo and Seoul."
            imgUrl="https://www.reuters.com/resizer/AmbZIifM7E7f7DEAboC_E7N-id8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/65RDBMI2OJNFVOPF53CZYGAEIU.jpg"
          />
        </div>
        <div className="col-md-4">
          <NewsCard
            title="Hurricane Julia makes landfall in Nicaragua as a Category 1 storm - CNN"
            description="Tropical Storm Julia is now categorized as a hurricane with maximum sustained winds of 75 mph, according to the National Hurricane Center on Saturday."
            imgUrl="https://media.cnn.com/api/v1/images/stellar/prod/221008190537-01-hurricane-julia-honduras-221008.jpg?c=16x9&q=w_800,c_fill"
          />
        </div>

        <div className="col-md-4">
          <NewsCard
            title="Actor Ray Buffer Accused of Stealing Comics, Store Says It's on Video - TMZ"
            description="Actor Ray Buffer is being accused of stealing comics from a store in San Diego, and it appears to be caught on video."
            imgUrl="https://imagez.tmz.com/image/48/16by9/2022/10/07/484bb4213e06498598e39c43adfd268b_xl.jpg"
          />
        </div>
      </div>
    );
  }
}

export default CardContainer;
