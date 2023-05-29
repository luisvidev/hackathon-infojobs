import { ChatBox } from '@components/infochat/ChatBox/ChatBox';
import { Introduction } from '@components/infochat/Introduction';
import { SecondaryLayout } from '@components/ui/layouts/SecondaryLayout/SecondaryLayout';

export const InfoChatTemplate = () => {
  return (
    <SecondaryLayout>
      <div className="grow">
        <Introduction />
        <ChatBox />
      </div>
    </SecondaryLayout>
  );
};
