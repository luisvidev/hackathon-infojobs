import style from './style.module.css';

export const Typing = () => {
  return (
    <div className={style.chatBubble}>
      <div className={style.typing}>
        <div className={style.dot} />
        <div className={style.dot} />
        <div className={style.dot} />
      </div>
    </div>
  );
};
