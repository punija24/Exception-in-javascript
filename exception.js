<!DOCTYPE html> 
<html> 
  
<head> 
    <script> 
        year(); 
          
        // For the year // 
        function year() { 
            try { 
                month(); 
  
            } catch (e) { 
                console.log( 
'Error was finally caught in year():', e.message); 
                alert(e.stack); 
            } 
        } 
  
        // Fo the month // 
        function month() { 
            try { 
                day(); 
            } catch (e) { 
                console.log( 
'Error was then caught and rethrown in month():', e.message); 
                throw (e); 
            } 
        } 
  
        function day() { 
            var d = 8; 
            var days = [ 
              'Mon', 'Tue', 'Wed',  
              'Thurs', 'Fri', 'Sat', 'Sun']; 
            try { 
                d = d - 1; 
                if (days[d] != undefined) 
                    console.log("valid day:", days[d]); 
                else
                      
                    // Message is "Invalid day" 
                    throw new Error("Invalid day");  
            } catch (e) { 
                console.log( 
"Error originated in day() and was thrown:", e.message) 
                throw (e); 
  
            } 
        } 
    </script> 
</head> 
  
<body> 
    <h1>Welcome To Geeksforgeeks</h1> 
</body> 
  
</html>                         
