import express from 'express';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';

import routes from './routes';

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)
// Em ambiente de desenvolvimento não tem problema nenhum.
// Já em produção, informa-se o domínio da aplicação React

// se usa essa funcionalidade para servir arquivos estáticos
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors())

app.listen(process.env.PORT || 3333)
