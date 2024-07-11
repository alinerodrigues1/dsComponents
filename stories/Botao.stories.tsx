import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Botao } from "../src";

export default {
    title: 'Componentes/Botao',
    component: Botao
} as ComponentMeta<typeof Botao>

const Template: ComponentStory<typeof Botao> = () => <Botao />

export const Primario = Template.bind({})