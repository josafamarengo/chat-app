import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')

    const VALID_EMAIL_EXPRESSION = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    const handleRegister = () => {
        var numbers = /^[0-9]+$/;
        var lettersDown = /^[a-z]+$/;
        var lettersUp = /^[A-Z]+$/;
        var special = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;

        var auxNumbers = 0;
        var auxLettersDown = 0;
        var auxLettersUp = 0;
        var auxSpecial = 0;

        for (var i = 0; i < password.length; i++) {
            if (password.charAt(i).match(numbers)) {
                auxNumbers++;
            }
            if (password.charAt(i).match(lettersDown)) {
                auxLettersDown++;
            }
            if (password.charAt(i).match(lettersUp)) {
                auxLettersUp++;
            }
            if (password.charAt(i).match(special)) {
                auxSpecial++;
            }
        }

        if (name.length < 3) {
            alert('Nome muito curto')
        
        } else if (!VALID_EMAIL_EXPRESSION.test(email)) {
            alert('E-mail inválido')
        
        } else if (password.length < 6) {
            alert('A senha deve ter no mínimo 6 caracteres')

        } else if ( auxNumbers === 0 || auxLettersDown === 0 || auxLettersUp === 0 || auxSpecial === 0) {
            alert('A senha deve conter pelo menos um número, uma letra minúscula, uma letra maiúscula e um caractere especial')
        
        } else if (password !== confirmPassword) {
            alert('Senhas não conferem')
        
        } else {
            alert('Cadastro realizado com sucesso')
        }
    }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style='light' />
        <Text style={{ marginBottom: 30, fontSize: 16, fontWeight: 'bold'}}>Crie sua conta</Text>

        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#000"
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={true}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#000"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={true}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#000"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={true}
                onChangeText={(text) => setPassword(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirmar senha"
                placeholderTextColor="#000"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={true}
                onChangeText={(text) => setConfirmPassword(text)}
                onSubmitEditing={handleRegister}
            />
            <TouchableOpacity
                style={styles.registerButton} onPress={handleRegister}
            >
                Cadastrar
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
                Voltar
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

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
        width: 300,
        height: 40,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        padding: 5,
        marginBottom: 10,
    },
    registerButton: {
        width: 200,
        height: 40,
        backgroundColor: '#2C6BED',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        boxShadow: '0px 3px 10px #000',
    },
    backButton: {
        width: 200,
        height: 40,
        backgroundColor: '#fff',
        color: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        boxShadow: '0px 3px 10px #000',
    },
    error: {
        color: 'red',
    }
})