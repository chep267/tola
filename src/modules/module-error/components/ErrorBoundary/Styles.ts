import Button from '@module-base/components/Button';
import styled from 'styled-components';

export const FallBack = styled.div(({ theme }) => ({
    color: theme.color.text.custom,
    textAlign: 'center',
    img: {
        width: 'auto',
        height: 100,
        borderRadius: 20,
    },
}));

export const Retry = styled(Button)(({ theme }) => ({
    backgroundColor: theme.color.button.default,
    color: theme.color.text.default,
    borderRadius: 30,
    padding: '10px 30px',
    margin: '40px 0 20px',
}));
