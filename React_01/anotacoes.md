# Como criar um react app utilizando typescript

- utilizar o comando = npx create-react-app my_app_ts --template typescript

# importante

- quando uma div for utilizada apenas para englobar 2 ou mais componetes irmãos, devemos substituí-la pela tag abaixo:

<React.Fragment>
    <div>
        <h2>SubTitle</h2>
        <p>Text</p>
    </div>
    <div>
        <h2>SubTitle</h2>
        <p>Text</p>
    </div>
</React.Fragment>

