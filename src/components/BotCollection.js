import React from "react";
import BotCard from "./BotCard";
function BotCollection({ bots, selectBort }) {
	// Your code here
	return (
		<div className="ui four column grid">
			<div className="row">
				{bots.map((bot) => (
					<BotCard key={bot.id} bot={bot} onSelectBot={selectBort} />
				))}
			</div>
		</div>
	);
}

export default BotCollection;