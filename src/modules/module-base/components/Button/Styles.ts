import styled from 'styled-components';
import { FlexCustom, BorderRadiusCustom } from '@module-theme/constants/Mixin';

export const Container = styled.button((props) => ({
    ...FlexCustom({ justifyContent: 'flex-start' }),
    ...BorderRadiusCustom(6),
    width: '80%',
}));
