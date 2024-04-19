import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { fetchCeobeLinkData } from "@/data/fetch";
import type { CeobeLink } from "@/data/types";

export function CardLinks() {
  const [links, setLinks] = useState<CeobeLink[]>([]);
  const { toast } = useToast();

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    const getLinks = async () => {
      const resp = await fetchCeobeLinkData();
      if (resp.code !== 0) {
        toast({
          title: "获取数据时出错",
          description: resp.msg,
          variant: "destructive",
          action: (
            <ToastAction altText="知道了" onClick={refreshPage}>
              呜呜
            </ToastAction>
          ),
        });
      } else {
        setLinks(resp.data ?? []);
      }
    };
    getLinks();
  }, [toast]);

  return (
    <>
      {links.map((link, id) => (
        <Card key={id} className=" hover:bg-muted">
          <CardHeader>
            <div className="flex justify-between items-center space-x-2">
              <div className="flex items-center space-x-2">
                {link.cover && (
                  <img
                    src={link.cover}
                    alt={link.name}
                    className="w-6 h-6 rounded-sm"
                  />
                )}
                <CardTitle>{link.name}</CardTitle>
              </div>
              <Button size="sm" className="ml-auto">
                <a href={link.url} target="_blank" rel="noreferrer">
                  前往
                </a>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="overflow-ellipsis">
              {link.desc}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
