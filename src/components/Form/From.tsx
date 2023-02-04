import React, { FC } from 'react';
import { observer } from "mobx-react-lite";
import './Form.scss';
import './Progress.scss';

const Form: FC = () => {
  const [password, setPassword] = React.useState<string>("");
  const [valid, setValid] = React.useState<string>("");

  const changePass = (value: React.SetStateAction<string>) => {
    setPassword(value);
    const containsDigit = new RegExp(/\d/);
    const containsLetter = new RegExp(/[a-zA-Z]/);
    const containsSymbol = new RegExp(/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/);
    const ar = [containsDigit.test(String(value)), containsLetter.test(String(value)), containsSymbol.test(String(value))]
    switch (ar.filter(val => val).length) {
      case 1:
        setValid("easy");
        break;
      case 2:
        setValid("medium");
        break;
      case 3:
        setValid("strong");
        break;
      default: 
        setValid("")
    }
    if (value.length < 8) setValid("failed");
    if (value.length === 0) setValid("");
  }

  return (
    <section className="form">
      <form>
        <fieldset className="form__field">
          <label className="form__label" htmlFor="password">Enter your password</label>
          <input className="form__input" type="password" id="password" name="password" value={password} onChange={evt => changePass(evt.currentTarget.value)} />
        </fieldset>
      </form>
      <div className="progress">
        <div className={`progress__bar ${valid === "" ? "" : `progress__bar--${valid}`}`}></div>
        <div className={`progress__bar ${valid === "" ? "" : `progress__bar--${valid}`}`}></div>
        <div className={`progress__bar ${valid === "" ? "" : `progress__bar--${valid}`}`}></div>
      </div>
    </section>
  )
}

export default observer(Form);