import Header from './Header';
import styles from '../styles/app.module.css';

console.log(styles.container);

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <p>La mayoria de las aplicaciones se estructuran de esta manera</p>
        <p>Repasemos un poco archivo por archivo</p>
        <h3>Index</h3>
        <p>
          Es lo primero que se ejecuta. Es el punto de entrada de nuestra
          aplicacion. Es el responsable de renderizar nuestra aplicacion de
          react (root.render)
        </p>
        <h3>App</h3>
        <p>
          La mayoria de proyectos renderizan un componente llamado App, que
          seria nuestro componente base en nuestra aplicacion de React. Este
          componente App, es el ancestro de todos los componentes dentro de la
          aplicacion.
        </p>
        <p>
          Se encarga de manejar lo que tiene que ver con el layout core de
          nuestra app, el enrutado y cualquier tipo de configuracion que
          necesitamos para toda nuestra app.
        </p>
      </main>
    </div>
  );
}

export default App;
