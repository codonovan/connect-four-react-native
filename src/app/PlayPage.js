import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Board from '../connectfour/board/Board';
import GameModel from '../connectfour/game/GameModel';
import PlayerBadge from '../connectfour/player/PlayerBadge';
import switchGamePlayers from '../connectfour/game/SwitchPlayers';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#246dd5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        flex: 0,
        alignSelf: 'stretch',
        textAlign: 'center',
        color: 'white',
        fontSize: 32,
    },
    players: {
        flex: 0,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10,
        marginBottom: 10,
    },
    playerBadge: {
        padding: 10,
    },
    board: {
        flex: 0,
        alignSelf: 'stretch',
    },
});

export default class PlayPage extends Component {
    constructor(props) {
        super(props);

        const gameModel = new GameModel();

        this.state = {
            game: gameModel,
        };
    }

    changeTurn = () => {
        this.setState({ game: switchGamePlayers(this.state.game) });
    }

    render() {
        const game = this.state.game;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Play</Text>

                <View style={styles.players}>
                    <PlayerBadge player={game.player1} highlighted={game.isCurrentPlayer(game.player1)} style={styles.playerBadge} />
                    <PlayerBadge player={game.player2} highlighted={game.isCurrentPlayer(game.player2)} style={styles.playerBadge} />
                </View>

                <Board board={game.board} dropDisc={this.dropDisc} style={styles.board} />
            </View>
        );
    }
}
