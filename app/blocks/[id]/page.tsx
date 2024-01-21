import Block, { BlockProps } from "@/app/blocks/[id]";
import Page from "@/components/system/page";

async function BlockPage(props: BlockProps) {
  return (
    <Page title="Block" subtitle={`#${props.params.id}`}>
      <Block {...props} />
    </Page>
  );
}

export default BlockPage;
