import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Botao } from "../src";

export default {
    title: 'Componentes/Botao',
    component: Botao
} as ComponentMeta<typeof Botao>

const Template: ComponentStory<typeof Botao> = (args) => <Botao {...args} />

export const Primario = Template.bind({})

Primario.args = {
    texto: 'Botão Primário'
}

export const Secundario = Template.bind({})

Secundario.args = {
    texto: 'Botão Secundário',
    tipo: 'secondary'
}

export const Terciario = Template.bind({})

Terciario.args = {
    texto: 'Botão Secundário',
    tipo: 'tertiary'
}