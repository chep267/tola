/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { useState } from 'react';
import { SIGN_IN_ACTION } from '@module-auth/actions/SignIn';
import { useIntl } from 'react-intl';
import { useTheme } from 'styled-components';
import { useLanguage } from '@module-language/utils/useLanguage';
import { connect } from 'react-redux';

// Component
import {
    Menu,
    MenuItem,
    ListItemIcon,
    Divider,
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
} from '@mui/material';
import { Settings, ExpandMore, Language } from '@mui/icons-material';

// msg
import msg from '@module-auth/common/msg';

// Styles
import { Menu as MenuContainer, ButtonMenu } from './Styles';

type Props = {
    doSignIn(payload: { account: string; password: string; onSuccess(): void; onFailure(): void }): void;
};

function FormMenu(props: Props) {
    const intl = useIntl();
    const theme: any = useTheme();
    const hookLanguage = useLanguage();
    console.log('hookLanguage: ', hookLanguage);

    const [menu, setMenu] = useState<null | HTMLElement>(null);

    const data = [
        { id: 'lang', title: intl.formatMessage(msg.lang) },
        { id: 'theme', title: 'Giao diện' },
        { id: 'test', title: 'abc' },
    ];

    const onToggleMenu = (event: React.MouseEvent<HTMLElement>) => {
        // @ts-ignore
        hookLanguage.onChangeLanguage('vi');
        // if (!menu) setMenu(event.currentTarget);
        // else setMenu(null);
    };

    return (
        <MenuContainer>
            <ButtonMenu
                icon={{ name: 'menu', size: theme.iconSize.large, fill: theme.color.icon.base }}
                onPress={onToggleMenu}
            />
            <Menu
                anchorEl={menu}
                id="account-menu"
                open={Boolean(menu)}
                onClose={onToggleMenu}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,

                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                <Accordion style={{ margin: 0, boxShadow: 'none' }}>
                    <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                        <ListItemIcon style={{ minWidth: 35 }}>
                            <Language />
                        </ListItemIcon>
                        <Typography style={{ marginRight: 30 }}>{intl.formatMessage(msg.lang)}</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ textAlign: 'center', cursor: 'pointer' }}>
                        <Typography>{intl.formatMessage(msg.vi)}</Typography>
                    </AccordionDetails>
                    <AccordionDetails style={{ textAlign: 'center', cursor: 'pointer' }}>
                        <Typography>{intl.formatMessage(msg.en)}</Typography>
                    </AccordionDetails>
                </Accordion>
                <Divider />
                <Accordion style={{ margin: 0, boxShadow: 'none' }}>
                    <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                        <ListItemIcon style={{ minWidth: 35 }}>
                            <Settings />
                        </ListItemIcon>
                        <Typography style={{ marginRight: 30 }}>{intl.formatMessage(msg.theme)}</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ textAlign: 'center', cursor: 'pointer' }}>
                        <Typography>{intl.formatMessage(msg.light)}</Typography>
                    </AccordionDetails>
                    <AccordionDetails style={{ textAlign: 'center', cursor: 'pointer' }}>
                        <Typography>{intl.formatMessage(msg.dark)}</Typography>
                    </AccordionDetails>
                </Accordion>
            </Menu>
        </MenuContainer>
    );
}

const mapStateToProps = () => {
    // do
    return {};
};

const mapDispatchToProps = (dispatch: any) => {
    // do
    return {
        doSignIn: (payload) => {
            dispatch({ type: SIGN_IN_ACTION.SIGN_IN.REQUEST, payload });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormMenu);
