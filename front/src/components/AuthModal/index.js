import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AuthButton,
  CloseModal,
  ModalWrapper,
  ModalContents,
  Form,
  Input,
  Button,
  ErrorMessage,
} from './styles';
import logo from '../../static/images/logo.png';
import useInput from '../../hooks/useInput';
import { LOGIN_REQUEST, REGISTER_REQUEST } from '../../redux/type';
import { clearError } from '../../redux/reducers/authReducer';

const AuthModal = () => {
  const { userError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [authType, setAuthType] = useState('로그인');

  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const onOpenModal = () => {
    setIsOpen(true);
  };
  const onCloseModal = () => {
    setIsOpen(false);
    dispatch(clearError());
  };

  const handleAuthType = () => {
    if (authType === '로그인') {
      setAuthType('회원가입');
      dispatch(clearError());
    } else {
      setAuthType('로그인');
      dispatch(clearError());
    }
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (authType === '회원가입') {
        if (password !== passwordCheck) {
          return setPasswordError(true);
        }
        return dispatch({
          type: REGISTER_REQUEST,
          data: { nickname, email, password },
        });
      } else {
        return dispatch({
          type: LOGIN_REQUEST,
          data: { email, password },
        });
      }
    },
    [dispatch, authType, nickname, email, password, passwordCheck]
  );

  const AuthContent = (
    <Form onSubmit={onSubmit}>
      {authType === '회원가입' && (
        <Input
          autoComplete="nickname"
          placeholder="닉네임 입력"
          name="nickname"
          type="text"
          value={nickname}
          onChange={onChangeNickname}
          required
        />
      )}
      <Input
        autoComplete="email"
        placeholder="이메일 입력"
        type="email"
        name="email"
        value={email}
        onChange={onChangeEmail}
        required
      />
      <Input
        autoComplete="new-password"
        placeholder="비밀번호 입력"
        name="password"
        type="password"
        value={password}
        onChange={onChangePassword}
        required
      />
      {authType === '회원가입' && (
        <Input
          autoComplete="new-password-check"
          placeholder="비밀번호 다시 입력"
          name="passwordConfirm"
          type="password"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          required
        />
      )}
      {passwordError ? (
        <ErrorMessage>비밀번호가 일치하지않습니다.</ErrorMessage>
      ) : (
        userError && <ErrorMessage>{userError}</ErrorMessage>
      )}
      <Button>{authType}</Button>
    </Form>
  );

  return (
    <>
      <AuthButton onClick={onOpenModal}>로그인 / 회원가입</AuthButton>
      <ModalWrapper isOpen={isOpen}>
        <ModalContents>
          <div className="top-wrapper">
            <img style={{ width: '150px' }} src={logo} alt="bigflix-logo" />
            <CloseModal isOpen={isOpen} onClick={onCloseModal} />
          </div>
          {AuthContent}
          <div className="footer">
            {authType === '로그인' ? (
              <p>
                아직 회원이 아니신가요? <span onClick={handleAuthType}>회원가입</span>
              </p>
            ) : (
              <p>
                이미 계정이 있으신가요? <span onClick={handleAuthType}>로그인</span>
              </p>
            )}
          </div>
        </ModalContents>
      </ModalWrapper>
    </>
  );
};

export default AuthModal;
