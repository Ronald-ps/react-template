import { forwardRef } from "react";

interface VerticalAnimationContainerProps {
  inView?: boolean;
  animationTime?: number;
  children: React.ReactNode;
}
export const VerticalAnimationContainerComponent = (
  props: VerticalAnimationContainerProps,
  ref: React.Ref<HTMLDivElement> /* essa ref serve pra fazer verificações se o componente está em visualização */
) => {
  if (typeof props.inView === "undefined") {
    props.inView = true;
  }
  return (
    <div
      className="VerticalAnimationContainer"
      style={{
        transform: props.inView ? "none" : "translateY(-1px)",
        opacity: props.inView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
          props.animationTime || "0.06"
        }s`,
      }}
      ref={ref}
    >
      {props.children}
    </div>
  );
};

/**
 * @description Componente que anima o conteúdo verticalmente
 * @params inView: boolean [default = true] -  verifica se o componente está em visualização, ou seja, sendo renderizado
 * visualmente na tela
 * @params animationTime: number [default = 0.06] - tempo de animação em segundos
 * @params children: React.ReactNode - conteúdo que será animado
 * @example
 * <VerticalAnimationContainer inView={true} animationTime={0.06}>
 * <div>Conteúdo que será animado</div>
 * </VerticalAnimationContainer>
 *
 */
export const VerticalAnimationContainer = forwardRef(
  VerticalAnimationContainerComponent
);
