<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Hash Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        table {
            width: 80%;
            margin: 20px auto;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        input[type="number"] {
            width: 200px;
            padding: 10px;
            margin: 20px 0;
        }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
</head>
<body>
    <h2>Password Hash Generator</h2>
    <input type="number" id="passwordCount" placeholder="Enter number of passwords">
    <button onclick="generatePasswords()">Generate Passwords</button>
    <div id="passwordTable"></div>

    <script>
        function generatePasswords() {
            var passwordCount = document.getElementById("passwordCount").value;
            var passwordTable = document.getElementById("passwordTable");
            passwordTable.innerHTML = "";

            var table = document.createElement("table");
            var thead = document.createElement("thead");
            var tbody = document.createElement("tbody");
            var tr = document.createElement("tr");
            var th1 = document.createElement("th");
            th1.textContent = "Password";
            var th2 = document.createElement("th");
            th2.textContent = "Hash";

            tr.appendChild(th1);
            tr.appendChild(th2);
            thead.appendChild(tr);
            table.appendChild(thead);
            table.appendChild(tbody);
            passwordTable.appendChild(table);

            for (var i = 0; i < passwordCount; i++) {
                var password = "aaaaa" + String.fromCharCode(97 + i);
                var hash = generateHash(password);
                var color = generateColor(hash);

                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                td1.textContent = password;
                var td2 = document.createElement("td");
                td2.textContent = hash;
                td2.style.backgroundColor = color;

                tr.appendChild(td1);
                tr.appendChild(td2);
                tbody.appendChild(tr);
            }
        }

        function generateHash(password) {
            // Use SHA-256 hashing algorithm from CryptoJS library
            var hash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
            return hash;
        }

        function generateColor(hash) {
            // Generate color from hash value
            var hexColor = "#" + hash.substring(0, 6);
            return hexColor;
        }
    </script>
</body>
</html>
