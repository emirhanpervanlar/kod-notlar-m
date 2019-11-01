import {ActivityIndicator, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import React from "react";

export default class Example extends React.PureComponent {
    constructor(props){
        super(props);
        this.state={
            liter:"",
            price:"",
            saveFetchData:false
        };
    }

    _clearSpecialCharacters = (value) => {
        // Check text special character
        if(value.length == 1){
            // First letter "," clear
            if(value[0] == "," || value[0] == "."){
                return "";
            }
        }

        if(value[value.length-1] == "," || value[value.length-1] == "."){
            // Last letter , or . check other special character
            const specialCount =  (value.match(/,/g) || []).length;
            if(specialCount > 0)
                // find other special character and clear this letter
                return value.slice(0,-1);
        }
        // Clear special character without , or .
        return value.toString().replace(/[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi, '').replace(".",",");
    };


    _sendButton = async() => {
        if(!this.state.saveFetchData) {
            await this.setState({saveFetchData:true});
            // Check empty value
            if (this.state.liter != "" && this.state.price != "") {
                // Check last letter ","
                if (this.state.liter.endsWith(",") || this.state.price.endsWith(",")) {
                    // Last letter ","
                    ToastAndroid.show("Değerleri kontrol ediniz", ToastAndroid.SHORT);

                } else {
                    // Accept work code

                }
                this.setState({saveFetchData:false});
            }
        }
    }


    render(){
        return(
            <View style={{flex:1}}>
                <View>
                    <Text style={styles.itemTitle}>Example 1 :</Text>
                    <TextInput autoFocus={true} onSubmitEditing={() => { this.priceInput.focus(); }} returnKeyType={"next"} maxLength={3} onChangeText={(value) => this.setState({liter:this._clearSpecialCharacters(value,1)})} value={String(this.state.liter)} keyboardType='decimal-pad' placeholder="Liter value"/>
                </View>
                <View>
                    <Text style={styles.itemTitle}>Example 2 :</Text>
                    <TextInput ref={(input) => { this.priceInput = input; }} onSubmitEditing={() => { this.kmInput.focus(); }} returnKeyType={"next"} maxLength={5} onChangeText={(value) => this.setState({price:this._clearSpecialCharacters(value,1)})} value={String(this.state.price)} keyboardType='decimal-pad' placeholder="Price value"/>
                </View>
                <TouchableOpacity onPress={() => this._saveFuel()}>
                    {
                        this.state.saveFetchData ?
                            <ActivityIndicator size="small" color="#fff" />
                            :
                            <Text>Send</Text>
                    }
                </TouchableOpacity>
            </View>
        )
    }
}