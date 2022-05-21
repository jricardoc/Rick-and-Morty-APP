import { Mode } from './types';
import styled from "styled-components/native";

interface ContainerProps {
    readonly color: string;
    readonly borderColor: string;
    readonly mode: Mode;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    background-color: ${({color, mode}) => {
        if (mode === "outlined") {
            return "transparent"
        } 
        return color
    }};
    padding: 12px 0;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    flex-direction: row;
    border-color: ${({borderColor}) => borderColor || "transparent"};
    border-width: 1px;
`;

interface TextProps {
    readonly color: string;
    size: number;
}

export const Title = styled.Text<TextProps>`
    color: ${({color}) => color};
    font-size: ${({size}) => size || 15}px;
    align-self: center;
`;

export const Loading = styled.ActivityIndicator`
    margin-left: 10px;
`;

export const AbsoluteIcon = styled.View`
    position: absolute;
    left: 20px;
`;