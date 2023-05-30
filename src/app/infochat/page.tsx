import { InfoChatTemplate } from '@components/website/infoChat/InfoChatTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InfoChat',
};

export default function InfoChat() {
  return (
    <>
      <InfoChatTemplate />
    </>
  );
}
