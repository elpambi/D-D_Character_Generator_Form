document.addEventListener('DOMContentLoaded', () => {
    const razaSelect = document.getElementById('raza');
    const claseSelect = document.getElementById('clase');
    const fuerzaInput = document.getElementById('fuerza');
    const destrezaInput = document.getElementById('destreza');
    const constitucionInput = document.getElementById('constitucion');
    const inteligenciaInput = document.getElementById('inteligencia');
    const sabiduriaInput = document.getElementById('sabiduria');
    const carismaInput = document.getElementById('carisma');

    razaSelect.addEventListener('change', actualizarAtributos);
    claseSelect.addEventListener('change', actualizarAtributos);

    function actualizarAtributos() {
        // Resetear atributos
        fuerzaInput.value = 4;
        destrezaInput.value = 4;
        constitucionInput.value = 4;
        inteligenciaInput.value = 4;
        sabiduriaInput.value = 4;
        carismaInput.value = 4;

        // Aplicar bonificaciones de raza
        switch (razaSelect.value) {
            case 'elfo':
                destrezaInput.value = parseInt(destrezaInput.value) + 2;
                inteligenciaInput.value = parseInt(inteligenciaInput.value) + 1;
                break;
            case 'enano':
                constitucionInput.value = parseInt(constitucionInput.value) + 2;
                fuerzaInput.value = parseInt(fuerzaInput.value) + 2;
                break;
            case 'nomada_desierto':
                carismaInput.value = parseInt(constitucionInput.value) + 1;
                constitucionInput.value = parseInt(fuerzaInput.value) + 2;
                break;
            case 'jagger':
                destrezaInput.value = parseInt(destrezaInput.value) + 3;
                inteligenciaInput.value = parseInt(fuerzaInput.value) + 1;
                break;
            case 'keres':
                destrezaInput.value = parseInt(destrezaInput.value) + 2;
                carismaInput.value = parseInt(fuerzaInput.value) + 1;
                break;
            case 'aetherio':
                sabiduriaInput.value = parseInt(constitucionInput.value) + 2;
                inteligenciaInput.value = parseInt(fuerzaInput.value) + 1;
                break;
            case 'humano':
                carismaInput.value = parseInt(constitucionInput.value) + 2;
                fuerzaInput.value = parseInt(fuerzaInput.value) + 2;
                break;
            // Añadir más razas y sus bonificaciones
        }

        // Aplicar bonificaciones de clase
        switch (claseSelect.value) {
            case 'barbaro':
                fuerzaInput.value = parseInt(fuerzaInput.value) + 3;
                constitucionInput.value = parseInt(constitucionInput.value) + 1;
                break;
            case 'mago':
                inteligenciaInput.value = parseInt(inteligenciaInput.value) + 2;
                sabiduriaInput.value = parseInt(sabiduriaInput.value) + 1;
                break;
            case 'bardo':
                carismaInput.value = parseInt(inteligenciaInput.value) + 3;
                inteligenciaInput.value = parseInt(sabiduriaInput.value) + 1;
                break;
            case 'clerigo':
                carismaInput.value = parseInt(inteligenciaInput.value) + 1;
                sabiduriaInput.value = parseInt(sabiduriaInput.value) + 2;
                break;
            case 'druida':
                constitucionInput.value = parseInt(inteligenciaInput.value) + 3;
                destrezaInput.value = parseInt(sabiduriaInput.value) + 1;
                break;
            case 'explorador':
                destrezaInput.value = parseInt(inteligenciaInput.value) + 2;
                fuerzaInput.value = parseInt(sabiduriaInput.value) + 1;
                break;
            case 'paladin':
                fuerzaInput.value = parseInt(inteligenciaInput.value) + 2;
                constitucionInput.value = parseInt(sabiduriaInput.value) + 1;
                break;
            case 'picaro':
                destrezaInput.value = parseInt(inteligenciaInput.value) + 3;
                carismaInput.value = parseInt(sabiduriaInput.value) + 1;
                break;
            case 'vagabundo':
                break;
            // Añadir más clases y sus bonificaciones
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const razaSelect = document.getElementById('raza');
    const habilidadesInputs = document.querySelectorAll('.habilidad input');

    const abilities = {
        elfo: ['acrobatics', 'nature', 'perception'],
        enano: ['athletics', 'history', 'investigation'],
        nomada_desierto: ['animal_handling', 'survival', 'deception'],
        aetherio: ['arcana', 'performance', 'persuasion'],
        humano: ['acrobatics', 'athletics', 'persuasion'],
        jagger: ['stealth', 'intimidation', 'sleight_of_hand'],
        keres: ['arcana', 'history', 'medicine']
    };

    razaSelect.addEventListener('change', () => {
        const selectedRace = razaSelect.value;
        const selectedAbilities = abilities[selectedRace] || [];

        // Desmarcar todas las habilidades
        habilidadesInputs.forEach(input => {
            input.checked = false;
        });

        // Marcar las habilidades asociadas a la raza seleccionada
        selectedAbilities.forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                input.checked = true;
            }
        });
    });

    habilidadesInputs.forEach(input => {
        input.addEventListener('change', () => {
            // Contar cuántas habilidades están marcadas
            const checkedInputs = document.querySelectorAll('.habilidad input:checked');
            const maxSelectable = 4; // Límite máximo de habilidades seleccionadas

            if (checkedInputs.length > maxSelectable) {
                // Si se han marcado más de 4 habilidades, desmarcar la última seleccionada
                input.checked = false;
                alert('Solo puedes seleccionar hasta 4 habilidades en total.');
            }
        });
    });
});

function downloadTextFile() {
    const form = document.getElementById('character-form');
    const formData = new FormData(form);
    let text = 'Formulario de Creación de Personaje\n\n';

    formData.forEach((value, key) => {
        if (key === 'habilidades') {
            text += `Habilidades: ${value}\n`;
        } else {
            text += `${key}: ${value}\n`;
        }
    });

    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'datos-personaje.txt';
    link.click();
}