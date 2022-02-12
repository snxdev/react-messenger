import { AppRoutes } from "src/routes";
import { AppTheme } from "src/theme";
import { ChatProvider, ContactsProvider } from "src/contexts";

const App = () => {
  return (
    <AppTheme>
      <ContactsProvider>
        <ChatProvider>
          <AppRoutes />
        </ChatProvider>
      </ContactsProvider>
    </AppTheme>
  );
};

export default App;
