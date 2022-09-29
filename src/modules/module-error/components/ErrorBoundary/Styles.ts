import Button from '@module-base/components/Button';
import { Rounded, Glowing } from '@module-base/components/Button/Animation';
import styled from 'styled-components';

export const FallBack = styled.div(({ theme }) => ({
    color: theme.color.text.custom,
    textAlign: 'center',
    img: {
        width: 'auto',
        height: 100,
        borderRadius: '50%',
    },
}));

export const Retry = styled(Button)(({ theme }) => ({
    padding: '10px 30px',
    margin: '40px 0 20px',
    fontSize: theme.fontSize.base,
    color: theme.color.text.light,

    ...Rounded({ borderRadius: 30 }),
    // ...Glowing({
    //     background: 'gray',
    //     borderRadius: 30,
    // }),
}));
