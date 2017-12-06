
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Button,
    View,
    Text,
    FlatList,
} from 'react-native';


class Index extends Component<{}> {
    constructor(props) {
        super(props);
    }


    onPressLearnMore = () => {
        console.log('display starting...');

        // return fetch("http://localhost:3000/top/playlist")
        return fetch("http://www.mini123.link:3000/top/playlist", {
            method: "GET",
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log('res', responseJson);
                this.setState({
                    playlist: responseJson && responseJson.playlists
                })
            })
            .catch(error => {
                console.error(error);
            });

    }

    _keyExtractor = (item, index) => index;

    _renderItem = ({item}) => (
        <View><Text>{item.name}</Text></View>
    );


    state = {
        playlist: [],
    }

    render() {
        const {playlist} = this.state;

        return (
            <View>
                <Button
                    onPress={this.onPressLearnMore}
                    title="点击获取数据"
                    color="#841584"
                />

                {/*<View style={styles.list}>
                    {
                        playlist && playlist.length>0 && playlist.map((item, i) => {
                            return <View key={i}><Text>{item.name}</Text></View>
                        })
                    }
                </View>*/}


                <View style={styles.list}>
                    <FlatList
                        data={playlist}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                    />
                </View>
            </View>
        );
    }
}

export default Index;

const styles = StyleSheet.create({
    list: {
        overflow: 'hidden',
        height: 500,
    }
});
