import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { getSession } from 'next-auth/react';
import { NextPageContext } from 'next';
import StandardPageWrapper from 'layout/StandardPageWrapper';
import withAnimation from 'shared/HOC/withAnimation';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

function SignupPage() {
  const { t } = useTranslation('signup');

  return (
    <StandardPageWrapper>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('content')} />
      </Head>
    </StandardPageWrapper>
  );
}

export default withAnimation(SignupPage);
