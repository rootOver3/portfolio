import BlockContent from '@sanity/block-content-to-react'
import { Suspense } from "react";
import { imageBuilder } from '../../utils/sanity';
import Image from 'next/image';
import Container from '../Container';

const CodeBlock = (props) => {
  return (
    <pre data-language={props.node.language}>
      <code>{props.node.code}</code>
    </pre>
  )
}

const TableBlock = (props) => {
  return (
    <div className="p_table">
      <table>
        {(props.node.rows).map((row, i) => (
          (row._type === "tableRow") && (
            <tr key={row?._key}>
              {(row.cells).map((cel, i) => (
                <td key={i + row._key}>{cel}</td>
              ))}
            </tr>
          )
        ))}
      </table>
    </div>
  )
}

const imageBlock = (props) => {
  const src = imageBuilder(props.node.asset).url();
  return (
        <figure className='p_1c_img'>
          <Image
            src={src}
            fill
            style={{
              objectFit: 'contain',
            }}
            alt={props.node.caption}
          />
          {props?.node?.caption && (
            <caption>{props.node.caption}</caption>
          )}
        </figure>
  )
}

const serializers = {
  types: {
    code: CodeBlock,
    sizeChart: TableBlock,
    image: imageBlock
  },
}

function SingleContent({ content }) {
  return (
    <section className="p_single_content">
      <Container className="p_container">
        <Suspense fallback={<div>Loading</div>}>
          <BlockContent
            className="font-sans"
            blocks={content}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            serializers={serializers}
          />
        </Suspense>


        {/* <div className="p_2c_img">
            <div className="p_2c_left">
              <Image
                src={`/images/img1.jpg`}
                width={413}
                height={341.77}
                alt="sdf asdf"
                layout="responsive"
              />
            </div>
            <div className="p_2c_right">
              <Image
                src={`/images/img2.jpg`}
                width={413}
                height={341.77}
                alt="sdf asdf"
                layout="responsive"
              />
            </div>
          </div> */}

      </Container>
    </section>
  );
}

export default SingleContent;
