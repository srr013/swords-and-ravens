import React, { Component, ReactNode } from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Row from "react-bootstrap/Row";
import PlaceOrdersComponent from "./PlaceOrdersComponent";
import PlaceOrdersGameState from "../../common/ingame-game-state/planning-game-state/place-orders-game-state/PlaceOrdersGameState";
import PlanningGameState from "../../common/ingame-game-state/planning-game-state/PlanningGameState";
import { observer } from "mobx-react";
import GameStateComponentProps from "./GameStateComponentProps";
import renderChildGameState from "../utils/renderChildGameState";
import ClaimVassalsGameState from "../../common/ingame-game-state/planning-game-state/claim-vassals-game-state/ClaimVassalsGameState";
import ClaimVassalsComponent from "./ClaimVassalsComponent";

@observer
export default class PlanningComponent extends Component<GameStateComponentProps<PlanningGameState>> {
    render(): ReactNode {
        return (
            <>
                <ListGroupItem>
                    <Row>
                        {renderChildGameState(this.props, [
                            [PlaceOrdersGameState, PlaceOrdersComponent],
                            [ClaimVassalsGameState, ClaimVassalsComponent],
                        ])}
                    </Row>
                </ListGroupItem>
            </>
        );
    }
}
