import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const dialogsElements = state.users.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
  ));

  const messagesElements = state.messages.map((message) => (
    <Message message={message.message} name={message.name} />
  ));

  const onSendMessage = () => {
    props.sendMessage();
  };

  const onMessageChange = (e) => {
    const body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={cl.dialogs}>
      <div>
        <div className={`${cl.dialog_items} ${'block'}`}>{dialogsElements}</div>
      </div>
      <div>
        <div className={`${cl.messages} ${'block'}`}>
          {messagesElements}
          <textarea
            className={cl.textarea}
            onChange={onMessageChange}
            value={state.newMessageBody}
          />
          <button className={cl.sendButton} onClick={onSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
