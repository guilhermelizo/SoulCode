import React, { useContext } from "react";
import { TouchableOpacity, View, Text} from "react-native";
import firebase from "../../../firebase";
import { UserContext } from "./UserContext";

export default function UserView() {
  const { deslogar } = useContext(UserContext);

  const logout = async () => {
    const auth = firebase.auth;
    await auth.signOut();
    deslogar();
  };

  return (
    <View >
      <TouchableOpacity 
            onPress={logout}>
        <Text >Sair</Text>
        </TouchableOpacity>
    </View>
  );
}