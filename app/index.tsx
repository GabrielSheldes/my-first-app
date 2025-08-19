import React, { useEffect, useState } from "react";
import socket from "@/socket/socket";
import { Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "@/styles"


export default function Socket() {
    const roomPrefix = 'chat';

    // Form 1
    const [message, setMessage] = useState('');
    const [receivedMessage, setReceivedMessage] = useState ('');

     // Form 2
    const [message2, setMessage2] = useState('');
    const [receivedMessage2, setReceivedMessage2] = useState ('');

    useEffect (()=> {
        socket.emit('join_room', 'chat-1');
        socket.emit('join_room', 'chat-2' );

        socket.on('receive_message', (Response:{
            room: string, msg: string
        }) => {
            console.log(Response);
            if (Response.room === 'chat-2'){
                setReceivedMessage(Response.msg);
            } else if (Response.room === 'chat-2'){
                setReceivedMessage2(Response.msg);
            }
        });
        return () => { socket.off('receive_message');};
    },[]);
    const sendMessage = (chat: string) => {
        const targetRoom = `${roomPrefix}-${chat}`;
        const msg = chat ==='1' ? message : message2;

        socket.emit('send_message', {
            room: targetRoom, message: msg
        })
if (chat === '1') {
    setMessage('');
} else {
    setMessage2('');
}    
    };

    //Estruta do Componente 
return (
    <View style={styles.container}>

        {/*form 1 */}
        <View>
            <Text style={styles.title}>Canal: chat1 1 </Text>

            <TextInput
                placeholder="Digite sua mensagem"
                value={message}
                onChangeText={setMessage}
                style={styles.input}
            />

            <TouchableOpacity
            style={styles.button}
            onPress={()=> sendMessage('1')}
            >

            <Text style={styles.buttonText}>Enviar Mensagem</Text>
            </TouchableOpacity>

            <Text style={styles.receivedMessageTitle}>Mesagem Recebida:</Text>
            <Text style={styles.receivedMessage}>{receivedMessage2 || 'nehuma mensagem recebida'}</Text>

        </View>

        <View style={styles.line}></View>


        {/*Form 2*/}
        <View>

            <Text style={styles.title}>Canal: chat 2</Text>
            <TextInput
                placeholder="Digite sua mensagem "
                value={message2}
                onChangeText={setMessage2}
                style={styles.input}
            />    

           <TouchableOpacity 
            style={styles.button}
            onPress={() => sendMessage('2')}>

            <Text style={styles.buttonText}>Enviar Mensagem</Text>
           </TouchableOpacity>

           <Text style={styles.receivedMessageTitle}>Messagem recebida:</Text>
           <Text style={styles.receivedMessageTitle}>{receivedMessage || 'nenhuma mensagem recebida'}</Text>
        </View>

    </View>
    );
}