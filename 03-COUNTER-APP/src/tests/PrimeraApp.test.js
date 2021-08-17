import React from 'react';
import { shallow } from 'enzyme'
import PrimeraApp from '../PrimeraApp'

describe('Pruebas PrimeraApp.js', () =>{
        /*  test('debe de mostrar el mensaje Hola soy goku', () => {       
         const saludo = "Hola soy goku";
         const { getByText } = render (<PrimeraApp saludo={ saludo }/>)
          expect( getByText( saludo ) ).toBeInTheDocument();      
         }) */
         test('debe de mostrar <PrimeraApp/> correctamente', () => {       
             const saludo="Hola soy goku";
             const wrapper= shallow(<PrimeraApp saludo={ saludo }/>)
             expect( wrapper ).toMatchSnapshot();
            });
        
            test('debe de mostrar el subtitulo enviado por props', () => {       
                const saludo="Hola soy goku";
                const subTitulo='Soy un subtitulo';
                const wrapper= shallow(
                    <PrimeraApp 
                        saludo={ saludo } 
                        subTitulo= {subTitulo}
                    />
                );
                const textoParrafo = wrapper.find('p').text();
                expect( textoParrafo ).toBe(subTitulo)
               }); 
});