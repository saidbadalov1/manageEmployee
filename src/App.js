import EmployeeList from './components/EmployeeList';
import EmployeeContextProvider from './components/contexts/EmployeeContext';

function App() {
  return (
    <div className="">

      <div className="container-xxl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <EmployeeContextProvider>
              <EmployeeList />
            </EmployeeContextProvider>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;