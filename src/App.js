import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';


function App() {
  return (
    <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: '5b218778-e7a5-4d73-8187-f10824047715',
            embedUrl: "https://api.powerbi.com/v1.0/myorg/groups/f089354e-8366-4e18-aea3-4cb4a3a50b48/reports/5b218778-e7a5-4d73-8187-f10824047715",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6InoxcnNZSEhKOS04bWdndDRIc1p1OEJLa0JQdyIsImtpZCI6InoxcnNZSEhKOS04bWdndDRIc1p1OEJLa0JQdyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYzZjMDRhZjgtN2U4My00MzU3LTg3YzAtMTFmMWQxM2JmOGI5LyIsImlhdCI6MTczNTI5MDgyMCwibmJmIjoxNzM1MjkwODIwLCJleHAiOjE3MzUyOTUyMjcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBWVFBZS84WUFBQUFnYW9yaEp0L1NUdmRoL2pzNnZrbE81RjgvMWhYNEsrK2NlWmRzRVMzckE3N0ovUVEzd3dzSDdsYXVwYUgzb0NJMytTL1A4WTVSS2lOYk01ZWlLVHplZU9SWG9NclYxNEY3ay9iY2FzWTJ0blRRWnNnbVhKOGFQcVVFZkJPUDF0SGhHSkx0R0R4UWYzT3hsOHNjNitHWFNPV1FtbVFGV2VFRTBndG1jNlUyeDQ9IiwiYWx0c2VjaWQiOiIxOmxpdmUuY29tOjAwMDNCRkZENjY3NzYxMTkiLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiMThmYmNhMTYtMjIyNC00NWY2LTg1YjAtZjdiZjJiMzliM2YzIiwiYXBwaWRhY3IiOiIwIiwiZW1haWwiOiJhbmtpdC5qYWluQGZ1dHVyZXByb2ZpbGV6LmNvbSIsImZhbWlseV9uYW1lIjoiSmFpbiIsImdpdmVuX25hbWUiOiJBbmtpdCIsImlkcCI6ImxpdmUuY29tIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMTIyLjE4MC4yNDcuMTk4IiwibmFtZSI6IkFua2l0IEphaW4iLCJvaWQiOiI1ZWI4NzczYi0zN2ViLTQyNDAtOWE2MC05NDA2MWM2YzRhOWQiLCJwdWlkIjoiMTAwMzIwMDQyNjAwNEY1NiIsInJoIjoiMS5BYjRBLUVyQXhvTi1WME9Id0JIeDBUdjR1UWtBQUFBQUFBQUF3QUFBQUFBQUFBQy1BQ2UtQUEuIiwic2NwIjoiQXBwLlJlYWQuQWxsIENhcGFjaXR5LlJlYWQuQWxsIENhcGFjaXR5LlJlYWRXcml0ZS5BbGwgQ29ubmVjdGlvbi5SZWFkLkFsbCBDb25uZWN0aW9uLlJlYWRXcml0ZS5BbGwgQ29udGVudC5DcmVhdGUgRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFmbG93LlJlYWRXcml0ZS5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR2F0ZXdheS5SZWFkLkFsbCBHYXRld2F5LlJlYWRXcml0ZS5BbGwgSXRlbS5FeGVjdXRlLkFsbCBJdGVtLkV4dGVybmFsRGF0YVNoYXJlLkFsbCBJdGVtLlJlYWRXcml0ZS5BbGwgSXRlbS5SZXNoYXJlLkFsbCBPbmVMYWtlLlJlYWQuQWxsIE9uZUxha2UuUmVhZFdyaXRlLkFsbCBQaXBlbGluZS5EZXBsb3kgUGlwZWxpbmUuUmVhZC5BbGwgUGlwZWxpbmUuUmVhZFdyaXRlLkFsbCBSZXBvcnQuUmVhZFdyaXRlLkFsbCBSZXBydC5SZWFkLkFsbCBTdG9yYWdlQWNjb3VudC5SZWFkLkFsbCBTdG9yYWdlQWNjb3VudC5SZWFkV3JpdGUuQWxsIFRlbmFudC5SZWFkLkFsbCBUZW5hbnQuUmVhZFdyaXRlLkFsbCBVc2VyU3RhdGUuUmVhZFdyaXRlLkFsbCBXb3Jrc3BhY2UuR2l0Q29tbWl0LkFsbCBXb3Jrc3BhY2UuR2l0VXBkYXRlLkFsbCBXb3Jrc3BhY2UuUmVhZC5BbGwgV29ya3NwYWNlLlJlYWRXcml0ZS5BbGwiLCJzdWIiOiJjU3BVUVJ3TzZhYnZ5cVg0NF93SVM0TWVlVXZIeV9IcjZRbUJKY3JzdWJnIiwidGlkIjoiYzZjMDRhZjgtN2U4My00MzU3LTg3YzAtMTFmMWQxM2JmOGI5IiwidW5pcXVlX25hbWUiOiJsaXZlLmNvbSNhbmtpdC5qYWluQGZ1dHVyZXByb2ZpbGV6LmNvbSIsInV0aSI6IlNLS0JSSTdyNTA2R0dwVzV6ZXZKQXciLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfaWRyZWwiOiIxIDIyIiwieG1zX3BsIjoiZW4ifQ.enwipcNkfMvbZvWINdC7RCurGuAD6veBkE2NJzu2HIWhMEzEWNBCg7TgNITfka4nlHVGOHmyEpHTfLqn1cCrmIhOnUMb3HxOTUrl07h-w7rZ2dD88KS-yXSkVZHilrC_ekcwNgGGOnW_u5TMHQ3ENfJvUKDgZMPY9ng2BSrsZG60_OHGAS2HnhfXoV1qPG__L3-c339mMIlv1V_R2Nph-XlYnafZr2tbZCJVnUeMfnSreO8jsGv42V4CT9_hDwACR9bbqxkHZRHvyGgCdoBtJO_ysbjYSO-pvuJXmLMM7dYAVJy2nS2_imvJLgiBvQYB7_Hb-moSaXUi7I6K_3T3VA',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
  );
}

export default App;
