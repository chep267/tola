/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import Button from '@module-base/components/Button';
import { FlexCustom } from '@module-theme/constants/Mixin';
import styled from 'styled-components';

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

export const FormTitle = styled.div({
    ...FlexCustom({ flexDirection: 'column', width: '100%' }),
    span: { fontSize: 40, color: '#ff7f50' },
});

export const Menu = styled.div((props) => ({
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: props.theme.zIndexMax,
}));

export const ButtonMenu = styled(Button)((props) => ({
    backgroundColor: 'unset',
}));
