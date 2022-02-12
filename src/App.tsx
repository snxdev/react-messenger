import { AppRoutes } from "src/routes";
import { AppTheme } from "src/theme";
import { ContactsProvider } from "src/contexts";

const App = () => {
  return (
    <AppTheme>
      <ContactsProvider>
        <AppRoutes />
      </ContactsProvider>
    </AppTheme>
  );
};

export default App;
