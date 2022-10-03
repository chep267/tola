/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { connect } from 'react-redux';

// Component
import { Menu, ListItemIcon, Divider, Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import { Settings, ExpandMore, Language } from '@mui/icons-material';
import MenuList from '@module-base/components/MenuList';

// Utils
import { useLanguage } from '@module-language/utils/useLanguage';
import { useTheme } from '@module-theme/utils/useTheme';

// msg
import msg from '@module-auth/common/msg';

// Styles
import { Menu as MenuContainer, ButtonMenu } from './Styles';

type Props = {
    doSignIn(payload: { account: string; password: string; onSuccess(): void; onFailure(): void }): void;
};

function FormMenu(props: Props) {
    const intl = useIntl();
    const { locale, toggleLanguage } = useLanguage();
    const { mode, toggleTheme, theme } = useTheme();

    const [menu, setMenu] = useState<null | HTMLElement>(null);

    const onChangeLanguage = () => toggleLanguage(locale === 'vi' ? 'en' : 'vi');

    const onChangeTheme = () => toggleTheme();

    const data = [
        { id: 'lang', title: intl.formatMessage(msg.lang) },
        { id: 'theme', title: 'Giao diện' },
        { id: 'test', title: 'abc' },
    ];

    const onToggleMenu = (event: React.MouseEvent<HTMLElement>) => {
        if (!menu) setMenu(event.currentTarget);
        else setMenu(null);
    };

    return (
        <MenuContainer>
            <ButtonMenu
                icon={{ name: 'menu', size: theme.iconSize.large, fill: theme.color.icon.base }}
                onPress={onToggleMenu}
            />
            <MenuList menu={menu} onCloseMenu={onToggleMenu}>
                <Accordion style={{ margin: 0, boxShadow: 'none' }}>
                    <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                        <ListItemIcon style={{ minWidth: 35 }}>
                            <Language />
                        </ListItemIcon>
                        <Typography style={{ marginRight: 30 }}>{intl.formatMessage(msg.lang)}</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ textAlign: 'center', cursor: 'pointer' }} onClick={onChangeLanguage}>
                        <Typography>{intl.formatMessage(msg.vi)}</Typography>
                    </AccordionDetails>
                    <AccordionDetails style={{ textAlign: 'center', cursor: 'pointer' }} onClick={onChangeLanguage}>
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
                    <AccordionDetails style={{ textAlign: 'center', cursor: 'pointer' }} onClick={onChangeTheme}>
                        <Typography>{intl.formatMessage(msg.light)}</Typography>
                    </AccordionDetails>
                    <AccordionDetails style={{ textAlign: 'center', cursor: 'pointer' }} onClick={onChangeTheme}>
                        <Typography>{intl.formatMessage(msg.dark)}</Typography>
                    </AccordionDetails>
                </Accordion>
            </MenuList>
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
            // dispatch({ type: SIGN_IN_ACTION.SIGN_IN.REQUEST, payload });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormMenu);
