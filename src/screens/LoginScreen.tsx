import { StyleSheet, Image, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    console.log(email, password);
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style="light" />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/8/8d/Signal-Logo.svg',
          }}
          style={{ 
            width: 150, 
            height: 150,
            marginTop: 20,
            borderRadius: 10,
          }}
        />
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <TextInput
              style={styles.inputText}
              placeholder="E-mail"
              placeholderTextColor="#000"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={true}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

            <TextInput
              style={styles.inputText}
              placeholder="Senha"
              placeholderTextColor="#000"
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              Entrar
            </TouchableOpacity>

            <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Cadastro')}>
              Cadastrar
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgot}>
              Esqueceu a senha? Clique aqui.
            </TouchableOpacity>
            
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  inputContainer: {
    width: 300,
    alignItems: 'center',
  },
  input: {
    width: '90%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  inputText: {
    width: '100%',
    height: 40,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
  loginButton: {
    width: 200,
    height: 40,
    backgroundColor: '#2C6BED',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    boxShadow: '0px 3px 10px #000',
  },
  registerButton: {
    width: 200,
    height: 40,
    backgroundColor: '#fff',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    boxShadow: '0px 3px 10px #000',
  },
  forgot: {
    marginTop: 15,
  }
})