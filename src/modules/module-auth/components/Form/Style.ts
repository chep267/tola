/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import styled from 'styled-components';
import Button from '@module-base/components/Button';
import PureContainer from '@module-base/components/PureContainer';
import { BorderRadiusCustom, FlexCustom } from '@module-theme/constants/Mixin';

export const Form = styled.div((props) => ({
    ...FlexCustom({ backgroundColor: props.theme.color.background.bodyBG }),
    flexDirection: 'column',
    width: '50%',
    height: '50%',
    minHeight: 400,
    minWidth: 480,
    borderRadius: 12,
}));

export const Language = styled.div({
    ...FlexCustom({ position: 'absolute', top: 0, right: 0, zIndex: 999 }),
    width: 200,
    height: 20,
    padding: 10,
    borderLeft: '5px solid #038cf5',
    borderBottom: '2px solid #038cf5',
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 50,
    fontSize: 16,
});

export const FormContent = styled.div({
    ...FlexCustom({ flexDirection: 'column', width: '100%' }),
});

export const FormTitle = styled(PureContainer)({
    ...FlexCustom({ flexDirection: 'column', width: '82.5%', alignItems: 'flex-start' }),
    span: { fontSize: 40, color: '#ff7f50', padding: '10px 0' },
});

export const FormFooter = styled.div({
    ...FlexCustom({ flexDirection: 'column', width: '82.5%', alignItems: 'flex-end', marginTop: 20 }),
});

export const ButtonSignIn = styled(Button)(({ theme }) => ({
    ...FlexCustom({ height: 50, padding: '10px 30px' }),
    ...BorderRadiusCustom(20),
    // ...Glowing({ background: theme.color.button.default }),
}));
