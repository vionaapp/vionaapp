import React from 'react';
import { graphql } from 'gatsby';

// Components
import Graphic from '../components/Graphic/Graphic';
import Layout from '../components/Layout/Layout';
import InstaWp from '../components/InstaWp/InstaWp';

export const query = graphql`
	{
		rayi: file(relativePath: { eq: "img/logos/rayi.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		boka: file(relativePath: { eq: "img/logos/boka.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		architect: file(relativePath: { eq: "img/logos/architect.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		denj: file(relativePath: { eq: "img/logos/denj.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		kado: file(relativePath: { eq: "img/logos/kado.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		hani: file(relativePath: { eq: "img/logos/hani.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

function GraphicDesignPage({ data }) {
	return (
		<Layout title="گرافیک دیزاین">
			<InstaWp />
			<Graphic
				boka={data.boka.childImageSharp.fluid}
				rayi={data.rayi.childImageSharp.fluid}
				architect={data.architect.childImageSharp.fluid}
				denj={data.denj.childImageSharp.fluid}
				kado={data.kado.childImageSharp.fluid}
				hani={data.hani.childImageSharp.fluid}
			/>
		</Layout>
	);
}

export default GraphicDesignPage;
