"use client";

import { getBlockByHash, getBlockByHeight } from "@/config/api";
import { useSuspenseQuery } from "@tanstack/react-query";

const useBlockByHash = (blockHash: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ["block", "hash", blockHash],
    queryFn: async () => await getBlockByHash(blockHash),
  });

  return data;
};

const useBlockByHeight = (blockHeight: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ["block", "height", blockHeight],
    queryFn: async () => getBlockByHeight(blockHeight),
  });

  return data;
};

export { useBlockByHash, useBlockByHeight };
