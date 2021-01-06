import React from 'react';
import SummaryItem from './SummaryItem';
import SummaryTotal from './SummaryTotal';

class MainSummary extends React.Component{
    
    render() {

        const summary = Object.keys(this.props.selected).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const selectedOption = this.props.selected[feature];

          return (
            < SummaryItem 
                featureHash={featureHash}
                feature={feature}
                selectedOption={selectedOption.name}
                cost={selectedOption.cost}
                key={selectedOption.name}
            />
          );
        });

        return (
        <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <SummaryTotal 
            selected={this.props.selected}                
                />
        </section>
        )
    }
}
export default MainSummary;