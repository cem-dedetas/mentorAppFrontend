import { useTranslation } from "next-i18next";

const Comp = () => {
    const { t } = useTranslation();

    return (<h1>{t('loginsss')}</h1>);
}

export default Comp;