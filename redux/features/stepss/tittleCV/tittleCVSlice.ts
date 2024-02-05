import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  selectedValues: ['Developer'],
  contentOptionSelect: [
    {
      "value": "Academia",
      "label": "Academia"
    },
    {
      "value": "Accounting",
      "label": "Contabilidad"
    },
    {
      "value": "Acting",
      "label": "Actuación"
    },
    {
      "value": "Administration",
      "label": "Administración"
    },
    {
      "value": "Advertising",
      "label": "Publicidad"
    },
    {
      "value": "Aerospace Engineering",
      "label": "Ingeniería Aeroespacial"
    },
    {
      "value": "Agriculture",
      "label": "Agricultura"
    },
    {
      "value": "Allied Health",
      "label": "Salud Aliada"
    },
    {
      "value": "Animation",
      "label": "Animación"
    },
    {
      "value": "Anthropology",
      "label": "Antropología"
    },
    {
      "value": "Architecture",
      "label": "Arquitectura"
    },
    {
      "value": "Art",
      "label": "Arte"
    },
    {
      "value": "Artificial Intelligence",
      "label": "Inteligencia Artificial"
    },
    {
      "value": "Astronomy",
      "label": "Astronomía"
    },
    {
      "value": "Athletic Training",
      "label": "Entrenamiento Atlético"
    },
    {
      "value": "Audio Engineering",
      "label": "Ingeniería de Audio"
    },
    {
      "value": "Automotive Technology",
      "label": "Tecnología Automotriz"
    },
    {
      "value": "Aviation",
      "label": "Aviación"
    },
    {
      "value": "Banking",
      "label": "Banca"
    },
    {
      "value": "Biochemistry",
      "label": "Bioquímica"
    },
    {
      "value": "Biology",
      "label": "Biología"
    },
    {
      "value": "Biomedical Engineering",
      "label": "Ingeniería Biomédica"
    },
    {
      "value": "Biotechnology",
      "label": "Biotecnología"
    },
    {
      "value": "Business",
      "label": "Negocios"
    },
    {
      "value": "Cabinetmaking",
      "label": "Ebanistería"
    },
    {
      "value": "Carpentry",
      "label": "Carpintería"
    },
    {
      "value": "Catering",
      "label": "Catering"
    },
    {
      "value": "Chemistry",
      "label": "Química"
    },
    {
      "value": "Childcare",
      "label": "Cuidado de niños"
    },
    {
      "value": "Civil Engineering",
      "label": "Ingeniería Civil"
    },
    {
      "value": "Coding",
      "label": "Programación"
    },
    {
      "value": "Communication",
      "label": "Comunicación"
    },
    {
      "value": "Computer Engineering",
      "label": "Ingeniería Informática"
    },
    {
      "value": "Computer Science",
      "label": "Ciencias de la Computación"
    },
    {
      "value": "Construction",
      "label": "Construcción"
    },
    {
      "value": "Cooking",
      "label": "Cocina"
    },
    {
      "value": "Cosmetology",
      "label": "Cosmetología"
    },
    {
      "value": "Counseling",
      "label": "Asesoramiento"
    },
    {
      "value": "Criminal Justice",
      "label": "Justicia Criminal"
    },
    {
      "value": "Culinary Arts",
      "label": "Artes Culinarias"
    },
    {
      "value": "Customer Service",
      "label": "Servicio al Cliente"
    },
    {
      "value": "Data Science",
      "label": "Ciencia de Datos"
    },
    {
      "value": "Dental Hygiene",
      "label": "Higiene Dental"
    },
    {
      "value": "Dentistry",
      "label": "Odontología"
    },
    {
      "value": "Design",
      "label": "Diseño"
    },
    {
      "value": "Development",
      "label": "Desarrollo"
    },
    {
      "value": "Dietetics",
      "label": "Dietética"
    },
    {
      "value": "Directing",
      "label": "Dirección"
    },
    {
      "value": "Early Childhood Education",
      "label": "Educación Infantil"
    },
    {
      "value": "Economics",
      "label": "Economía"
    },
    {
      "value": "Education",
      "label": "Educación"
    },
    {
      "value": "Electrical Engineering",
      "label": "Ingeniería Eléctrica"
    },
    {
      "value": "Emergency Medical Services",
      "label": "Servicios Médicos de Emergencia"
    },
    {
      "value": "Engineering",
      "label": "Ingeniería"
    },
    {
      "value": "Entrepreneurship",
      "label": "Emprendimiento"
    },
    {
      "value": "Environmental Science",
      "label": "Ciencia Ambiental"
    },
    {
      "value": "Event Planning",
      "label": "Planificación de Eventos"
    },
    {
      "value": "Exercise Science",
      "label": "Ciencia del Ejercicio"
    },
    {
      "value": "Fashion",
      "label": "Moda"
    },
    {
      "value": "Finance",
      "label": "Finanzas"
    },
    {
      "value": "Firefighting",
      "label": "Lucha contra incendios"
    },
    {
      "value": "Flight Attendant",
      "label": "Auxiliar de vuelo"
    },
    {
      "value": "Food Science",
      "label": "Ciencia de los Alimentos"
    },
    {
      "value": "Foreign Language",
      "label": "Lengua Extranjera"
    },
    {
      "value": "Forestry",
      "label": "Forestería"
    },
    {
      "value": "Game Design",
      "label": "Diseño de Juegos"
    },
    {
      "value": "Gardening",
      "label": "Jardinería"
    },
    {
      "value": "Graphic Design",
      "label": "Diseño Gráfico"
    },
    {
      "value": "Green Energy",
      "label": "Energía Verde"
    },
    {
      "value": "Healthcare",
      "label": "Cuidado de la salud"
    },
    {
      "value": "History",
      "label": "Historia"
    },
    {
      "value": "Hospitality",
      "label": "Hotelería"
    },
    {
      "value": "Human Resources",
      "label": "Recursos Humanos"
    },
    {
      "value": "Humanities",
      "label": "Humanidades"
    },
    {
      "value": "Illustration",
      "label": "Ilustración"
    },
    {
      "value": "Information Technology",
      "label": "Tecnología de la Información"
    },
    {
      "value": "Insurance",
      "label": "Seguros"
    },
    {
      "value": "Interior Design",
      "label": "Diseño de Interiores"
    },
    {
      "value": "International Relations",
      "label": "Relaciones Internacionales"
    },
    {
      "value": "Journalism",
      "label": "Periodismo"
    },
    {
      "value": "Law",
      "label": "Derecho"
    },
  ],
  MAX_COUNT: 5,

};

const tittleCVSlice = createSlice({
  name: 'hardSkills',
  initialState,
  reducers: {
    setTittleCVData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    addTittleCVEntry: (state) => {
      // Implement logic for adding a new entry if needed
      return state;
    },
    updateTittleEntry: (state, action) => {
      // Implement logic for updating an entry if needed
      return state;
    },
    deleteTittleCVEntry: (state, action) => {
      // Implement logic for deleting an entry if needed
      return state;
    },
  },
});

export const {
  setTittleCVData,
  addTittleCVEntry,
  updateTittleEntry,
  deleteTittleCVEntry,
} = tittleCVSlice.actions;

export default tittleCVSlice.reducer;